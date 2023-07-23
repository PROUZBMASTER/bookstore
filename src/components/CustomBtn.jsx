const CustomBtn = ({ btnType, btnStyle, btnOnCklick, btnText }) => {
  return (
    <>
      <button disabled={false}
        type={btnType || "button"}
        className={`customBtn  ${btnStyle}`}
        onClick={btnOnCklick}>
        <span>
          {btnText}
        </span>
        
      </button>
      
    </>
  )
}

export default CustomBtn