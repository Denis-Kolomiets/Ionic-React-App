import React from 'react';

import SwipeDrawer from '@mui/material/SwipeableDrawer';

import MenuNavStackService, { StackService, EScreenStack, EActionType } from './service';

import styles from './style.module.scss';

interface IMenuNavState {
  stack: Array<any>;
}

interface IMenuNavProps {
  showHeader?: boolean;
  transition?: number;
}

class MenuNav extends React.Component<IMenuNavProps, IMenuNavState> {
  static defaultProps = {
    showHeader: true,
    transition: 500,
    pushDelay: 50,
  };

  constructor(props: IMenuNavProps) {
    super(props);

    this.state = {
      stack: [],
    };
  }

  componentDidMount() {
    StackService.subscribe('menuNav', this.onUpdate);
  }

  componentWillUnmount() {
    StackService.unsubscribe('menuNav');
  }

  onUpdate = (action: any) => {
    if (!action || !action.type) {
      return;
    }

    switch (action.type) {
      case EActionType.Push: {
        return this.addStackItem(action.data);
      }
      case EActionType.Pop: {
        return this.removeStackItem(action.data);
      }
      case EActionType.Clear: {
        return this.clearStack(action.data);
      }
      case EActionType.ClearAll: {
        return this.clearAllStack();
      }
      default:
        break;
    }
  };

  addStackItem = (data: any) => {
    this.setState(
      {
        stack: [
          ...this.state.stack,
          {
            key: data.key,
            component: data.component,
          },
        ],
      },
      () => {
        const stack = [...this.state.stack];
        stack[stack.length - 1].open = true;
        this.setState({
          stack,
        });
      }
    );
  };

  removeStackItem = (data: any) => {
    const index = this.state.stack.findIndex(({ key }) => key === data.key);

    if (index < 0) {
      return;
    }
    const stack = [...this.state.stack];
    stack[index].open = false;
    this.setState({ stack });

    setTimeout(() => {
      this.setState({
        stack: this.state.stack.filter(({ key }) => key !== data.key),
      });
    }, 600);
  };

  clearStack = (data: any) => {
    this.setState({
      stack: this.state.stack.map((item) => {
        if (data.key.includes(item.key)) {
          return {
            ...item,
            open: false,
          };
        }
        return item;
      }),
    });
    setTimeout(() => {
      this.setState({
        stack: this.state.stack.filter(({ key }) => !data.key.includes(key)),
      });
    }, 600);
  };

  clearAllStack = () => {
    this.setState({
      stack: this.state.stack.map((item) => ({ ...item, open: false })),
    });
    setTimeout(() => {
      this.setState({
        stack: [],
      });
    }, 600);
  };

  onCloseStackItem = (key: EScreenStack) => {
    MenuNavStackService.pop({ key });
  };

  onOpenStackItem = () => {
    console.log('on open stack item');
  };

  render() {
    const { stack } = this.state;

    return (
      <>
        {stack.map((item) => (
          <ScreenDrawer key={item.key} open={item.open} onOpen={this.onOpenStackItem} onClose={() => this.onCloseStackItem(item.key)}>
            {item.component}
          </ScreenDrawer>
        ))}
      </>
    );
  }
}

export default MenuNav;

interface IScreenDrawer {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children?: JSX.Element;
}

const ScreenDrawer: React.FC<IScreenDrawer> = ({ children, open, onOpen, onClose }) => {
  return (
    <SwipeDrawer
      // anchor={}
      open={open}
      onOpen={onOpen}
      classes={{
        root: styles.muiDrawerRoot,
      }}
      onClose={onClose}
      transitionDuration={{
        enter: 400,
        appear: 400,
        exit: 500,
      }}>
      {children}
    </SwipeDrawer>
  );
};
