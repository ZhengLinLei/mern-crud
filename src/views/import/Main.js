import React, { Component } from 'react';

class Main extends Component{
    constructor(){
        super();

        //USE STATUS
        this.state = {
            content: '',
            task: []
        }

        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.getTask();
    }
    // FNC
    addTask(e){
        e.preventDefault();
        if(this.state.content){
            fetch('./api/', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(response => response.json())
            .then(json => {
                if('Saved' == json.status){
                    M.toast({html: 'New work added!'});
                    this.setState({content:''}); // CLEAR
                    this.getTask();
                }else{
                    throw 'Not working';
                }
            })
            .catch(err => {
                M.toast({html: 'Adding new work failed!', classes: 'red'});
            });
        }
    }
    handleChange(e){
        this.setState({
            content: e.target.value
        });
    }

    // GET TASK
    getTask(){
        fetch('./api/')
        .then(res => res.json())
        .then(json => {
            this.setState({task: json});
        });
    }

    // DELETE TASK
    deleteTask(id){
        fetch(`./api/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(json => {
            if('Deleted' == json.status){
                M.toast({html: 'Work deleted!'});
                this.getTask();
            }else{
                throw 'Not working';
            }
        })
        .catch(err => {
            M.toast({html: 'Deleting work failed!', classes: 'red'});
        });
    }
    render(){
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea id="task" className="materialize-textarea" onChange={this.handleChange} value={this.state.content}></textarea>
                                                <label htmlFor="textarea1">Task</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <button className="btn waves-effect deep-orange lighten-2" type="submit" name="action">Add</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <ul className="collection">
                                {
                                    this.state.task.map(el => {
                                        return (
                                            <li key={el._id} className="collection-item">
                                                <span>{el.content}</span>
                                                <div className="secondary-content row">
                                                    <span className="col s6 cursor" onClick={() => { this.deleteTask(el._id) }}><ion-icon name="close-outline"></ion-icon></span>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;