// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;

    colors: {
      primary: string;
      grey: string;
      ratingStar: string;
    };
  }
}
