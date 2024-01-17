import { IonIcon, IonItem, IonList, IonNavLink } from '@ionic/react';
import MenuLayout from '../../../shared/components/app-menu/menu-layout';
import { logoReact, logoAngular, logoVue, logoIonic, logoApple } from 'ionicons/icons';

import styles from './style.module.scss';

const SecondPage = () => {
  const options = [
    {
      key: 'react',
      component: (
        <MenuLayout>
          <div>React page</div>
        </MenuLayout>
      ),
      title: 'React',
      icon: logoReact,
    },
    {
      key: 'angular',
      component: (
        <MenuLayout>
          <div>Angular page</div>
        </MenuLayout>
      ),
      title: 'Angular',
      icon: logoAngular,
    },
    {
      key: 'vue',
      component: (
        <MenuLayout>
          <div>Vue page</div>
        </MenuLayout>
      ),
      title: 'Vue',
      icon: logoVue,
    },
    {
      key: 'ionic',
      component: (
        <MenuLayout>
          <div>Ionic page</div>
        </MenuLayout>
      ),
      title: 'Ionic',
      icon: logoIonic,
    },
    {
      key: 'ios',
      component: (
        <MenuLayout>
          <div>Ios page</div>
        </MenuLayout>
      ),
      title: 'Ios',
      icon: logoApple,
    },
  ];

  return (
    <MenuLayout>
      <IonList>
        {options.map((item) => (
          <IonItem key={item.key}>
            <IonNavLink routerDirection="forward" component={() => item.component}>
              <div className={styles.item}>
                <IonIcon icon={item.icon} className={styles.icon} />
                {item.title}
              </div>
            </IonNavLink>
          </IonItem>
        ))}
      </IonList>
    </MenuLayout>
  );
};

export default SecondPage;
