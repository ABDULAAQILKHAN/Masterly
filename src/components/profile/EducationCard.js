import '../css/global.css';


const EducationCard = ({data})=>{

console.log("data",data)
    return<>
        <div className="flex flex-col justify-start cardBorder p-4 gap-3">
        <div className='allCenter'>
            <h3 className='font-semibold text-l'>Institute Name: </h3>
            <h3 className=' text-lg'>{data.InstituteName}</h3>
        </div>         
        <div className='allCenter'>
            <h3 className='font-semibold text-l'>Course Opted: </h3>
            <h3 className=' text-lg'>{data.CourseName}</h3>
        </div>  
            <div className='flex flex-row justify-between w-[100%]'>
                <div className='allCenter'>
                    <h3 className='font-semibold text-l'>Started: </h3>
                    <h3 className=' text-lg'>{data.StartDate}</h3>
                </div> 
                <div className='allCenter'>
                    <h3 className='font-semibold text-l'>Ended: </h3>
                    <h3 className=' text-lg'>{data.EndDate}</h3>
                </div> 
            </div>
            <div className='allCenter'>
            <h3 className='font-semibold text-lg'>Experience: </h3>
            <h3 className=' text-lg'>{data.Experience}</h3>
            </div>
        </div>
    </>
}
export default EducationCard;