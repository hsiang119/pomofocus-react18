import React from "react";

type ButtonProps = {
  children: React.ReactNode,
  disabled: boolean
}

const ActiveButton= (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <button className="text-red-400" {...rest}>
      {children}
    </button>
  );
};

export default React.memo(ActiveButton);
