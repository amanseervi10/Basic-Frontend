import './Entries.css'

const IndividualEntry=(props)=>{
    const k=props.name+' ('+props.age+' years old)';

    const deleteHandler=()=>{
        const userToDelete=[props.name,props.age];
        props.delete(userToDelete)
    }

    return (
        <div className='data_entry' onClick={deleteHandler}>
            {k}
        </div>
    )
}

export default IndividualEntry;