function ProfileCard ({title, data}) {
    const handleClick=()=>{
        console.log({title})
    }
    return (
        <div>
            <div onClick={handleClick}>Title is {title}</div>
            <div>{data}</div>
        </div>
    )

}

export default ProfileCard;