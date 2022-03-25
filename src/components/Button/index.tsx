import React, { FC } from "react";
import {
  Button as ButtonMUI,
  Typography,
  TypographyProps,
  ButtonProps as ButtonMUIProps,
} from "@mui/material";

import styles from "./index.module.scss";

import { joinClasses } from "utils";

export interface ButtonProps extends ButtonMUIProps {
  /** Texto del boton */
  text: string;
  /** Propiedades opcionales del componente de texto, por defecto es 'subtitle2' */
  typographyProps?: TypographyProps;
  /** Clase para modificar las clases */
  className?: string;
}

/**
 * Boton primario
 */
const Button: FC<ButtonProps> = ({ text, typographyProps, className, ...anotherProps }) => {
  return (
    <ButtonMUI
      disableElevation
      disableFocusRipple
      classes={{
        root: joinClasses(styles.root, className),
        outlined: styles.outlined,
        contained: styles.contained,
      }}
      disableRipple={anotherProps.variant === "text"}
      {...anotherProps}
    >
      <Typography variant="subtitle2" {...typographyProps}>
        {text}
      </Typography>
    </ButtonMUI>
  );
};

export default Button;
