import Cart from "./images/cart.svg";
import CheckRounded from "./images/check-rounded.svg";
import Envelope from "./images/envelope.svg";
import Error404 from "./images/error-404.svg";
import Error from "./images/error.svg";
import LogoAbeloHost from "./images/logo-abelo-host.svg";
import SignIn from "./images/sign-in.svg";
import SignOut from "./images/sign-out.svg";
import User from "./images/user.svg";

export const IconsCollection = {
    cart: Cart,
    checkRounded: CheckRounded,
    envelope: Envelope,
    error404: Error404,
    error: Error,
    logoAbeloHost: LogoAbeloHost,
    signIn: SignIn,
    signOut: SignOut,
    user: User,
} as const;

export type IconKeys = keyof typeof IconsCollection;
