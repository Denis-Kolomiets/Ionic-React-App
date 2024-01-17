export enum EActionType {
  Push = 1,
  Pop,
  Clear,
  ClearAll,
}

export enum EScreenStack {
  FirstComponent,
}

class StackPublishSubscriber {
  private stack: any;

  constructor() {
    this.stack = new Map();
  }

  publish = (key: string, data: any) => {
    const subscriber = this.stack.get(key);

    if (!subscriber) {
      return;
    }

    subscriber(data);
  };

  subscribe = (key: 'menuNav', callback: any) => {
    const stack = this.stack.get(key);

    if (stack) {
      return;
    }
    this.stack.set(key, callback);
  };

  unsubscribe = (key: string) => {
    this.stack.delete(key);
  };
}

export const StackService = new StackPublishSubscriber();

export class MenuNavStack {
  push = (data: { key: EScreenStack; component: JSX.Element; props?: any }) => {
    StackService.publish('menuNav', {
      type: EActionType.Push,
      data,
    });
  };

  pop = (data: { key: EScreenStack }) => {
    StackService.publish('menuNav', {
      type: EActionType.Pop,
      data,
    });
  };

  clear = (data: { key: EScreenStack[] }) => {
    StackService.publish('menuNav', {
      type: EActionType.Clear,
      data,
    });
  };

  clearAll = () => {
    StackService.publish('menuNav', {
      type: EActionType.ClearAll,
    });
  };
}

const MenuNavStackService = new MenuNavStack();

export default MenuNavStackService;
