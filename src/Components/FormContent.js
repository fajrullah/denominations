import React from "react";
const FormContent = (props) =>  {
    return  <form onSubmit={props.onSubmit}>
				{props.children}
			</form>
}
export default FormContent