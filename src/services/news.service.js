import {
    getNews,
    addLabels
    
} from '../config/endpoints/news.endpoint'

import { apiRequest } from "./core-api.service";

class NewsService{

label = [
    {name: "Real", value: "0"},
    {name: "Fake", value: "1"},
    {name: "Not_Assigned", value: "-1"}

    ]

    getNews(setCountries,setForm){
        apiRequest(getNews,"GET").then((response)=>{
            if(response&&response.data&&response.data.data&&(response.data.data.length>0)){
                const initObject = {
                    Tweetid: '',
                    label: '',
                    ID:'',
                };
            
                let temp=[];
                for(let val of response.data.data){
                    temp.push(initObject);
                }
                // console.log(temp)
                
                setCountries(response.data.data.map(e=>{
                    return {
                        text:e.Text,
                        DateTime:e.Datetime,
                        tweetID:e.Tweet_Id,
                        label:e.label,
                        id:e._id,
                    }
                }))
                setForm(temp);

            }
        }).catch(()=>{
            // this.setLoader(false);
        })
    }

    getLabels(setlabels){

        setlabels(this.label.map(e=>{
            return {
                name:e.name,
                value:e.value,
            }
        }))

            
    }

    addLabels(data){
        // console.log(data)
        apiRequest(addLabels,'POST',data).then(response=>{
            // console.log(response)
            if(response.data.status){
                console.log("Labelling Successful")
            }else{
                console.log("Labelling Unsuccessful")}
        }).catch(()=>{
            console.log("Something Went Wrong")})
        

    }

}

export {NewsService};