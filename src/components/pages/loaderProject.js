import React from 'react';
import { connect } from 'react-redux';
import '../styles/loaderProject.scss';
import { GetTasksRichBD, GetIndutryOfUserStory, GetContextOfUserStory, GetOperationOfUserStory } from '../../apis/webSocket';
import { GetProtocol } from '../../apis/configBack';
import { pageDash, setMenu, setUS } from '../../actions';
import { GetHackToken, RefreshToken, DeleteToken } from '../../apis/configBack'

const timerLoadPage = 6500

class LoaderProject extends React.Component {

    state = { us: null, step2: null, closeInitial: false };

    componentDidMount() {

        this.timeout2 = setTimeout(() => {
            this.props.GetProtocol(this.props.token.AccessToken, "tasks")
        }, 1000)
        this.timeout3 = setTimeout(() => {
            this.getUserStory();
        }, 2000)


    }

    getUserStory() {

        this.ws = GetTasksRichBD(this.props.token.AccessToken, this.props.asanaSectionId, this.props.protocol.protocol, this)
        this.timeout = setTimeout(() => {
            this.setState({ us: this.props.uss })
            console.log('uss trabajo close')
            this.ws.close()
        }, 9000)
    }



    componentDidUpdate() {

        let currentTimestamp = Date.now()
        if (this.props.token && currentTimestamp > Number(this.props.token.AtExpires) * 1000) {
            this.props.RefreshToken(this.props.token.RefreshToken)
            // this.props.DeleteToken(this.props.token.AccessToken)
        }

        if (this.props.uss && this.props.uss[0].storyUser.length == 3 && this.state.step2 == null && this.state.closeInitial == true) {
            this.setState({ step2: true });
            console.log('uss trabajo')
            this.props.uss[0].storyUser.forEach((op, ind) => {
                this.timeout = setTimeout(() => {
                    let wss = GetIndutryOfUserStory(this.props.token.AccessToken, op.gid, "hqaProtocol", this, op.userStory)

                }, 3000, op)
            });



        }
    }

    renderItem(options) {

        let list = [];

        options.forEach((op, ind) => {
            let p = op.addInfo == 1 ? "15%" : "100%";
            p = this.state[op.gid] === 2 ? "35%" : p;
            p = this.state[op.gid] === 3 ? "50%" : p;
            p = this.state[op.gid] === 4 ? "70%" : p;
            if (this.state[op.gid] === 2 && this.state[op.gid + '_'] === false) {
                this.state[op.gid + '_'] = true;
                this.setState({ ... this.state });

                this.timeout = setTimeout(() => {
                    let wss = GetContextOfUserStory(this.props.token.AccessToken, op.gid, "hqaProtocol", this, op.userStory)

                }, 3000, op)

            }
            else if (this.state[op.gid] === 3 && this.state[op.gid + '_'] === false) {
                this.state[op.gid + '_'] = true;
                this.setState({ ... this.state });

                this.timeout = setTimeout(() => {
                    let wss = GetOperationOfUserStory(this.props.token.AccessToken, op.gid, "hqaProtocol", this, op.userStory)

                }, 3000, op)

            }

            list.push(
                <tr key={'ope' + ind}>
                    <td>{op.gid} - {op.name.substring(0, 40)}</td>
                    <td>
                        <div>
                            <div id="countdown-wrap">
                                <div id="goals-wrap hq-text-complete ">
                                    <div id="goal-words ">Sincronizando ...</div>
                                </div>
                                <div id="glass">
                                    <div id="progress" style={{ width: p }}>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-process">Completar<span className="bg"></span></button>
                        </div>
                    </td>

                </tr>


            );
        });
        return list;
    }


    render() {

        if (this.props.uss != null && this.props.uss[0].storyUser != null) {
            return (
                <div className='loader-project'>
                    <div className="shop-card">
                        <div className="title">
                            Tus historias de usuario
                        </div>
                        <div className="desc">
                            En progreso
                        </div>

                        <table className="container">
                            <tbody>
                                {this.renderItem(this.props.uss[0].storyUser)}
                            </tbody>
                        </table>

                        <div className="cta">
                            <div className="price"></div>
                            <button className="btn" disabled >Finalizar<span className="bg"></span></button>
                        </div>
                    </div>
                    <div className="bg"></div>

                </div>)
        }
        else {
            return <div></div>;
        }

    }
}

const mapStateToProps = state => {
    return {
        page: state.streams.page,

        uss: state.streams.uss,
        token: state.streams.token,
        menu: state.streams.menu,
        asanaSectionId: state.streams.asanaSectionId,
        protocol: state.streams.protocol,
        asanaOauth: state.streams.asanaOauth,


    };
};

export default connect(mapStateToProps, { GetTasksRichBD, GetProtocol, setUS, RefreshToken, GetIndutryOfUserStory, GetOperationOfUserStory, GetContextOfUserStory })(LoaderProject);
