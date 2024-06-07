const Button = (props) => {
    const {children ="...", classname="bg-black"} = props; // memberikan default value 
    return(
      <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} //awalnya ${props.classname} setelah di definisikan di atas maka dihapus daja propsnya
      type="submit"
    >
      {children} 
    </button> ////awalnya ${props.childern} setelah di definisikan di atas maka dihapus daja propsnya
    );
  };

  export default Button;