
import React, { Component } from 'react'
import FilterResults from 'react-filter-search';
import "./search.scss"
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: ''
        };
    }


    danhGia = (movie) => {
        if (movie.danhGia) {
            let rate = movie.danhGia;
            let stars = [];
            for (let index = 0; index < 10; index += 2) {
                if (rate >= 2) {
                    stars.push(
                        <FaStar key={index} />
                    );
                } else if (rate >= 1) {
                    stars.push(

                        <FaStarHalf key={index} />
                    );
                } else
                    stars.push(
                        <FaRegStar key={index} />
                    );
                rate -= 2;
            }
            return stars;
        }
    };
    componentWillMount() {
        fetch('http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
            // fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1')

            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }
    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    };

    render() {
        const { data, value } = this.state;
        return (

            <div className="search row container-fluid">
                <div className="searchItem col-xl-3">

                    <input className="form-control mr-sm-2" type="text" value={value} onChange={this.handleChange} placeholder="Search" aria-label="Search" />
                    <div className="filter">
                        <h2>Genres & Subgenres</h2>

                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
Action
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
Adult</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  Adventure
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  Bussiness
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  Chirldren's family
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  Comedy Drama
</label>
                        </li>



                        <h2>AllMovie Rating</h2>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
All
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue"  />
  5
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
4
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  3
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  2
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  1
</label>
                        </li>
                        <h2>MPAA Rating</h2>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
 G
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  PG
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  PG13
</label>
                        </li>
                        <li>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" />
  Not Rated
</label>
                        </li>
                    </div>
                </div>
                <div className="col-xl-9">
                    <FilterResults
                        value={value}
                        data={data}
                        renderResults={results => (
                            <div className="searchResult">
                                <PerfectScrollbar>
                                    {results.map(el => (
                                        <NavLink style={{ textDecoration: "none" }} to={`/chi-tiet/${el.maPhim}`} className="test">
                                            <img src={el.hinhAnh} />
                                            <ul>
                                                <li> <span> Tên phim: {el.tenPhim}</span>
                                                </li>
                                                <li>Mô tả: {el.moTa.length > 50 ? el.moTa.substr(0, 50) + "..." : el.moTa}</li>
                                                <li>Đánh giá: <p style={{ color: "green" }} className="danhGia">{this.danhGia(el)}</p></li>
                                            </ul>



                                        </NavLink>

                                    ))}
                                </PerfectScrollbar>
                            </div>
                        )}
                    />
                </div>
            </div>

        );
    }
}



