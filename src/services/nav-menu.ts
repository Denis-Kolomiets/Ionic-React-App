class NavMenu {
  navigator: HTMLIonNavElement | null = null;

  getNavigator = () => {
    return this.navigator;
  };

  changeNavigator = (nav: HTMLIonNavElement | null) => {
    this.navigator = nav;
  };
}

const NavMenuService = new NavMenu();
export default NavMenuService;
