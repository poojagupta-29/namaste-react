import React, { Component } from "react";

// api taken from https://jsonplaceholder.typicode.com/users

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamData: []
        }
    }

    // componentDidMount()
    async componentDidMount() {
        console.log("component mounted")

        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const res = await data.json()
            // console.log(res)

            // to store the res value in state, for class based we use this.setState method
            this.setState({
                teamData: res
            })
        } catch (error) {
            console.log('Error: ' + error)
        }
    }

    // componentDidUpdate
    componentDidUpdate(prevState) {
        console.log(prevState, prevState.teamData, this.state.teamData)
        if (prevState.teamData !== this.state.teamData) {
            console.log("Team data updated, members count:", this.state.teamData.length)
        }
    }

    // componentWillUnmount (when you navigate to any component from about us, this method will get called)
    componentWillUnmount() {
        console.log("About component is being unmounted!");
    }


    render() {
        return (
            <div className="wrapper aboutus">
                {/* use of props */}
                <p className="about-title">{this.props.content}</p>

                <div className="about-cards">
                    {
                        this.state.teamData.map(members => {
                            return (
                                <div className="card" key={members.id}>
                                    <div className="card-content">
                                        <h3 className="card-title">{members.name}</h3>
                                        <p className="card-subtitle">{members.email}</p>
                                        <p className="card-rating">{members.phone}</p>
                                        <p className="card-delivery">{members.username}</p>
                                        <p className="card-location">{members.website}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default About;