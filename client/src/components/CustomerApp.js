import React from 'react'
import { post } from 'axios'



class customerAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        }
    }

    addCustomer = () => {
        const url = '/api/addUser';
        const formData = new FormData();
        formData.append('image' ,this.state.file);
        formData.append('userName' ,this.state.userName);
        formData.append('birthday' ,this.state.birthday);
        formData.append('gender' ,this.state.gender);
        formData.append('job' ,this.state.job);
        // 헤더 설정 : 파일 업로드가 있기때문
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'

            }
        }
        return post(url,formData,config); // form 전송
    }

    // form submit 핸들러
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
            console.log(response.data);
        })
        this.setState({
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        })
        window.location.reload();
    }

    // 파일 선택 핸들러(state 값 변경)
    handleFileChange = (e) => {
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        })
    }

    // 입력란 변경 시 state 값 변경
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                    <h1>고객 추가</h1>
                    <p>프로필 이미지 : <input type="file" name='file' file={this.state.file} fileName={this.state.fileName} onChange={this.handleFileChange}/></p>
                    <p>이름 : <input type="text" name="userName" value={this.state.userName}  onChange={this.handleValueChange}/></p>
                    <p>생년월일 : <input type="text" name="birthday" value={this.state.birthday}  onChange={this.handleValueChange}/></p>
                    <p>성별 : <input type="text" name="gender" value={this.state.gender}  onChange={this.handleValueChange}/></p>
                    <p>직업 : <input type="text" name="job" value={this.state.job}  onChange={this.handleValueChange}/></p>
                    <button type="submit">추가하기</button>
            </form>
        )
    }
}


export default customerAdd