import './Form.css'


const Form=()=>{
    return (
        <div className="Form">
            <form className='form_inside'>
                <div className='input_elements'>
                    <label className='input_label'>Username</label><br></br>
                    <input type="text" size="60"></input>
                </div>
                <br></br>
                <div className='input_elements'>
                    <label className='input_label'>Age (Years)</label><br></br>
                    <input type="number" ></input>
                </div>
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default Form;