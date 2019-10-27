import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status : this.props.status
    };

    activateStatus() {
        this.setState({
            editMode: true
        })
    };

    deactivateStatus() {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status); // отправляем новый статус на сервер
    };

    onStatusChange(e) {
        this.setState({
            status : e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) { // чтобы статус не занулялся
            this.setState({
                status : this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateStatus.bind(this)} >My status: {this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={ this.onStatusChange.bind(this) }
                            type="text"
                            value={this.state.status}
                            onBlur={this.deactivateStatus.bind(this)}
                            autoFocus={true} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;