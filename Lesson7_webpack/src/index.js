import * as consts from "@comp/constant";
import sendSurch from "@comp/surching";
import createLogo from "@comp/logo";
import "@sty/bootstrap.min.css";
import "@sty/style.sass";
import logo from "@/img/webpack-logo.png";

consts.FORM.onsubmit = sendSurch;
createLogo(logo);
