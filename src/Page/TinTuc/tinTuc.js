import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { MdAccessTime, MdBorderColor } from "react-icons/md"
import { Paper, Button } from "@material-ui/core"
import "./tinTuc.scss"
export default function TinTuc() {

    const [news, setnews] = useState({})
    const [isLoad, setisLoad] = useState(false)
    const [show, setshow] = useState(false)
    useEffect(() => {
        Axios({
            method: "GET",
            url: "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=495314b441eb414c8f9a0f86445882c4"
        })
            .then(res => {
                setnews(res.data)
                setisLoad(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const rederCard = () => {
        if (news.articles) {
            return news.articles.map((item, index) => {
                if (index > 5) {
                    if (show) {
                        return <div key={index} className="cardAL col-xl-4">
                            <Paper elevation={4} className="card">
                                <img className="card-img-top" src={item.urlToImage} alt />
                                <div className="card-body">
                                    <a target="_blank" href={item.url} className="card-title">{item.title}</a>
                                    <div className="test mt-2">
                                        <p><MdAccessTime /> {new Date(item.publishedAt).toDateString()}</p>
                                        <p><MdBorderColor />  {item.author}</p>
                                    </div>

                                </div>

                            </Paper>

                        </div>
                    } return null

                } return <div key={index} className="cardAL col-xl-4">
                    <Paper elevation={4} className="card">
                        <img className="card-img-top" src={item.urlToImage} alt />
                        <div className="card-body">
                            <a target="_blank" href={item.url} className="card-title">{item.title}</a>
                            <div className="test mt-2">
                                <p><MdAccessTime /> {new Date(item.publishedAt).toDateString()}</p>
                                <p><MdBorderColor />  {item.author}</p>
                            </div>

                        </div>

                    </Paper>

                </div>

            })
        }



    }
    const cl = () => {
        setshow(!show)
    }
    console.log(show)
    if (isLoad) {
        return (
            <div className="news container-fluid">
                <h1> Điện Ảnh 24h</h1>
                <div className="row">
                    {rederCard()}
                </div>
                <Button onClick={cl} variant="outlined" color="primary">
                    {show ? "Thu gọn" : "Xem thêm"}
                </Button>
            </div>

        )
    } return <div className="loadd">
        <div class="LoaderBalls">
            <div class="LoaderBalls__item"></div>
            <div class="LoaderBalls__item"></div>
            <div class="LoaderBalls__item"></div>
        </div>
    </div>
}
