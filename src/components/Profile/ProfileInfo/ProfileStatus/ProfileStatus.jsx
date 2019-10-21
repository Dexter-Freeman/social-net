import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateStatus() {
        this.setState({
            editMode: true
        })
    };

    deactivateStatus() {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateStatus.bind(this)} >{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            type="text"
                            value={this.props.status}
                            onBlur={this.deactivateStatus.bind(this)}
                            autoFocus={true} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;