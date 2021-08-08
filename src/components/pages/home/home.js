import React, { useEffect, useState } from 'react'
import { apiRequest } from '../../../services/core-api.service';
import { baseUrl } from '../../../config/endpoints/main.endpoint';

import { NewsService } from '../../../services/news.service';


const Home = () => {

    useEffect(() => {
        apiRequest(`${baseUrl}count`)
    }, [])

    const initObject = {
        Tweetid: '',
        label: '',
        
    };

    const [countryList, setcountryList] = useState([]);
    const [labels, setlabels] = useState([]);
    const [newsService, setnewsService] = useState(undefined);
    const [form, setForm] = useState([]);
    const [errors, setErrors] = useState(initObject);
    
    

    useEffect(() => {
        setnewsService(new NewsService());
    }, []);

    useEffect(() => {
        if (newsService) {
            newsService.getNews(setcountryList,setForm)
        }
    }, [newsService]);

    useEffect(() => {
        
        
    }, [countryList]);

    useEffect(() => {
        if (newsService) {
            newsService.getLabels(setlabels)
        }
    }, [newsService]);


    //load more news
    const handleClick = async () => {
        // console.log(countryList)
        newsService.getNews(setcountryList)

    }

    const addLabel = async (label,id) => {
        const obj = {id,label}
        newsService.addLabels(obj)
    }

    return (
        <React.Fragment>
            
            <div className="container-fluid home-division-1">
                <div className="row " > 

                    <div className="container-fluid"> 
                        <div className="row justify-content-center heading">
                            <h3> NEWS ANNOTATOR</h3>
                        </div>
                        <hr />
                           <div className="row">
                               <div className="col-md-8">
                                   <div className="card card1">
                                        <table className="table table-hover table1">
                                            <thead className="thead-dark justify-content-center">
                                                <tr>
                                                    <th className="text-col">News Text</th>
                                                    <th className="date-col">Posted Date</th>
                                                    <th>Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {countryList.map((row,index) => (
                                                    <tr key={row.id}>
                                                    
                                                        <td align="right">{row.text}</td>
                                                        <td align="right">{row.DateTime}</td>
                                                        <td>

                                                        <select 
                                                            
                                                            id="select-box"  
                                                            onChange={(val)=>addLabel(val.target.value,row.id)}
                                                            className={`form-control`}
                                                        >
                                                            <option className={`select-option`} value={""} key={index} >Select Label</option>
                                                        
                                                            {
                                                                labels.map((item,index)=>{
                                                                    return (
                                                                        <option className={`select-option`} value={item.value} key={index} >{item.name}</option>
                                                                    );
                                                                })
                                                            }
                                                        </select>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                                            
            
                            <div className="col-md-4 ">
                                <div className="intro">
                                    <div className="row ">
                                            <button type="button" className="btn1"
                                                onClick={handleClick}
                                            >Load More</button>

                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="card card2">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="intro-head">
                                                    INSTRUCTIONS
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row justify-content-center">
                                                <div className="intro-content">
                                                    <br/>
                                                    <ul>
                                                        <li><p>Select the most appropriate label for the news text given using the dropdown</p></li>
                                                        <li><p>Take the Posted date into consideration when deciding your selection</p></li>
                                                        <li><p>Mark "Not Assigned" in case of content is not a news or undecidable</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                    
                            </div>
                    </div>
                </div>
                
            </div>
         

                    

        </React.Fragment >
    );
}

export { Home };
