/*
prop ={
    skills= ['js','javascript','css']
    name = 'mahir'
}
*/



const SkillSection =(props)=>{
    return(
        <div className="skills">
            <h2>{props.name} Skills</h2>
            <ul>
                {props.skills.map((item)=>(
                    <li>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillSection;