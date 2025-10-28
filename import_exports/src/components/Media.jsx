import img1 from "../assets/images/Tinyen-RSp1.jpg"
import whatappIcon from "../assets/images/whatsapp.png"
import sampleVideo from "../assets/videos/file_example_MP4_640_3MG.mp4"
import foodData from "../assets/data/foodItems.json"
import data from "../assets/data/students.json"

export const MediaFiles = () =>{
   
    return <div>
        <p>media files</p>
        <img src={img1} alt="image" height={200} width={200} />
        <img src={whatappIcon}alt="whatsapp icons"  width={50}/>
        <video controls>
            <source src={sampleVideo} />
        </video>
        <img src="photos/pumpkin.png" alt="pumpkin" />
        <img src="vite.svg" alt="pumpkin" />
        <ul>
            <li>{foodData.foodName}</li>
            <li>{foodData.cal}</li>
        </ul>
        {
            data.map((item, index) => <div key={index} style={{ border: "1px solid green", width:"5rem" }}>
                <p>{item.name} </p>
                <p>{item.role}</p>
            </div> )
        }
    </div>
}