import React from 'react';
import { connect } from 'react-redux';
import './word.scss';
import { Button, Form } from 'react-bootstrap';
import $ from 'jquery';
import { firebaseConfig } from '../apis/firebase';
import * as Firebase from "firebase/app"
import Loader from './loader';
import packageJson from '../../package.json'
const Asana = require('asana');
const util = require('util');
const base64url = require("base64url");

//import Fetch from 'cross-fetch';
Firebase.initializeApp(firebaseConfig);

let timeoutLength = 3000;




class Word extends React.Component {

  state = {
    tipo: false, nw: 0, ne: 0, nr: 0, wspanish: '', wenglish: '', wexample: '', wtype: 'word',
    words: '', rules: '', expressiones: '', color: 'red', current: 0, vtext: '...', vtype: 'word', response: '', verror: '',
    loader: '', configuration: '', tEnglish: true, ec: 0, serviceT: null
  };

  componentDidMount() {
    this.updateData();
    this.randomVal();
    const querystring = window.location.search;
    const params = new URLSearchParams(querystring);
    let code = params.get('code');

    const requestOptions2 = JSON.stringify({});

    this.postData2('http://localhost:8081/asana', requestOptions2, this)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

   

    if (code != undefined) {
   
      this.postData3(`http://localhost:8081/asana2?code=${code}`, requestOptions2, this)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

    }


    const requestOptions = JSON.stringify({

      "grant_type": "authorization_code",
      "client_id": "1201830256646257",
      "client_secret": "3d19ec3d43e86e52add5d0439bafc054",
      "redirect_uri": "http://localhost:3000",
      "code": code

    });
    /*
   fetch('https://app.asana.com/-/oauth_token', requestOptions)
       .then(response => response.json())
       .then(data => this.setState({ postId: data.id }));
       */
    /*/*
             fetch('https://app.asana.com/-/oauth_token', {
              headers: new Headers({
                'User-agent': 'Mozilla/4.0 Custom User Agent'
              }),credentials: "same-origin"
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(error => console.error(error))
    
    
            */
/*
    this.postData('//app.asana.com/-/oauth_token', requestOptions)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });*/

    /*
          var client = Asana.Client.create({
            clientId: "1201830256646257",
            clientSecret: '3d19ec3d43e86e52add5d0439bafc054',
            redirectUri: 'http://localhost:3000/'
           });
          
          // Configure the way we want to use Oauth. This autodetects that we are
          // in a Node process, so uses the `NativeFlow` by default.
          client.useOauth();
          
          // When `authorize` is called it will prompt us to perform the authorization
          // in a browser and copy in the code we got. It will then exchange that for
          // a token.
          client.authorize().then(function() {
            // The client is authorized! Make a simple request.
            return client.users.me().then(function(me) {
              console.log('Hello ' + me.name);
            });
          }).catch(function(err) {
            console.log('An error occurred', err);
          });
    
          
        }*/
    /*   client.useOauth({ credentials: token });
// When `authorize` is called it will prompt us to perform the authorization
// in a browser and copy in the code we got. It will then exchange that for
// a token.
client.authorize().then(function() {
 // The client is authorized! Make a simple request.
 return client.users.me().then(function(me) {
   console.log('Hello ' + me.name);
 });
}).catch(function(err) {
 console.log('An error occurred', err);
});
     /*  client.useOauth({
         credentials: 'my_refresh_token'
       });*/

    /*
    console.log(client);
    client.users.me()
.then(user => {
const userId = user.gid;
// The user's "default" workspace is the first one in the list, though
// any user can have multiple workspaces so you can't always assume this
// is the one you want to work with.
const workspaceId = user.workspaces[0].gid;
return client.tasks.findAll({
  assignee: userId,
  workspace: workspaceId,
  completed_since: 'now',
  opt_fields: 'id,name,assignee_status,completed'
});
})
.then(response => {
// There may be more pages of data, we could stream or return a promise
// to request those here - for now, let's just return the first page
// of items.
return response.data;
})
.filter(task => {
return task.assignee_status === 'today' ||
  task.assignee_status === 'new';
})
.then(list => {
console.log(util.inspect(list, {
  colors: true,
  depth: null
}));
})
.catch(e => {
console.log(e);
});
//}
*/
  }

  async postData3(url = '', data = {}, thas) {
    // Opciones por defecto estan marcadas con un *

    let p = "a";
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then(function (response) {
      response.json().then(json => {
        console.log(json["message"]);
      });
      console.log(response);
      return response 
    }, function (error) {
      console.log(error.message) //=> String
    })
  
  }
async postData2(url = '', data = {}, thas) {
    // Opciones por defecto estan marcadas con un *

    let p = "a";
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then(function (response) {
      response.json().then(json => {
        console.log(json["message"]);
        thas.message = json["message"]
      });
      return response 
    }, function (error) {
      console.log(error.message) //=> String
    })
  
  }

  async postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *

    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      //     credentials: "same-origin"
    }).then(function (response) {
      console.log(response)     //=> number 100–599
      /* response.statusText //=> String
       response.headers    //=> Headers
       response.url        //=> String
     */
      return response.text()
    }, function (error) {
      console.log(error.message) //=> String
    })
    console.log(response.json())
    return response.json(); // parses JSON response into native JavaScript objects
  }


  randomVal = () => {
    this.timeout = setTimeout(() => {
      this.setState({ vword: '' });
      this.setState({ vexample: '' });
      this.setState({ loader: '' });
      this.randomElements(this.randomTypes());
      this.updateState(this.state.words, 'nextToW', 'cWord');
      this.updateState(this.state.expressiones, 'nextToE', 'cExpression');
      //this.updateState(this.state.rules, 'nextToE', 'cExpression');
    }, timeoutLength)
  }


  randomTypes() {
    let min = 1;
    let max = 2;
    let res = Math.round(Math.random() * (max - min)) + min;
    return res;
  };

  randomElements(type) {
    let max = 0;
    let min = 1;
    let mul = 1;
    let collElements = null;
    switch (type) {
      case 1:
        max = this.state.configuration.limit > this.state.nw ? this.state.nw : this.state.configuration.limit;
        mul = this.state.configuration.limit > this.state.nw ? 1 : this.state.configuration.nextToW;
        this.setState({ vtype: 'word' });
        collElements = this.state.words;
        break;
      case 2:
        max = this.state.configuration.limit > this.state.ne ? this.state.ne : this.state.configuration.limit;
        mul = this.state.configuration.limit > this.state.ne ? 1 : this.state.configuration.nextToE;
        this.setState({ vtype: 'expression' });
        collElements = this.state.expressiones;
        break;
      default:
        max = this.state.configuration.limit > this.state.nr ? this.state.nr : this.state.configuration.limit;
        mul = this.state.configuration.limit > this.state.nr ? 1 : this.state.configuration.nextToR;
        this.setState({ vtype: 'rule' });
        collElements = this.state.rules;
        break;
    }
    min = 1;
    let randomElement = (min + Math.round(Math.random() * (max - min))) * mul;
    this.setState({ verror: '' });
    if (max === 0)
      this.randomElements(type + 1 <= 3 ? type + 1 : 1)
    else
      this.retrieveElement(collElements, randomElement)
  };

  updateData() {
 /*   const starCountRef = Firebase.database().ref().child(`user/jose/word`);
    starCountRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        let objects = snapshot.val();
        this.setState({ 'nw': Object.keys(objects).length });
        this.setState({ 'words': objects })
      }
    });
    const starCountRef2 = Firebase.database().ref().child(`user/jose/rule`);
    starCountRef2.on('value', (snapshot) => {
      if (snapshot.val()) {
        let objects = snapshot.val();
        this.setState({ 'nr': Object.keys(objects).length });
        this.setState({ 'rules': objects })
      }
    });

    const starCountRef3 = Firebase.database().ref().child(`user/jose/expression`);
    starCountRef3.on('value', (snapshot) => {
      if (snapshot.val()) {
        let objects = snapshot.val();
        this.setState({ 'ne': Object.keys(objects).length });
        this.setState({ 'expressiones': objects })
      }
    });
    const starCountRef4 = Firebase.database().ref().child(`user/jose/configuration`);
    starCountRef4.on('value', (snapshot) => {
      if (snapshot.val()) {
        let objects = snapshot.val();
        this.setState({ 'configuration': objects })
      }
    });
    */
  }

  validateIn = e => {
    e.preventDefault();
    let varec = this.state.ec;
    let response = this.validateResponse();
    if (this.state.tEnglish) {
      if (response.obj.spanish === this.state.vword.toUpperCase()) {
        varec++;
        this.setState({ current: this.state.current + 1 });
        this.setState({ verror: "It's good!.." });
        response.obj['ok'] = response.obj['ok'] != undefined ? response.obj['ok'] + 1 : 1;
      }
      else {
        this.setState({ verror: response.obj.spanish });
        this.setState({ current: this.state.current > 0 ? this.state.current - 1 : 0 });
        response.obj['ko'] = response.obj['ko'] != undefined ? response.obj['ko'] + 1 : 1;
      }
    }
    else {
      if (response.obj.english === this.state.vword.toUpperCase()) {
        varec++;
        this.setState({ current: this.state.current + 1 });
        this.setState({ verror: "It's good!.." });
        response.obj['ok'] = response.obj['ok'] != undefined ? response.obj['ok'] + 1 : 1;
      }
      else {
        this.setState({ verror: response.obj.english });
        this.setState({ current: this.state.current > 0 ? this.state.current - 1 : 0 });
        response.obj['ko'] = response.obj['ko'] != undefined ? response.obj['ko'] + 1 : 1;
      }
    }
    this.changeColor();
    if (this.state.current === this.state.configuration.climit) {
      this.setState({ message: 'Congratulations' })
      this.setState({ current: 0 });
    }

    if (varec > this.state.configuration.change) {
      this.setState({ tEnglish: !this.state.tEnglish });
      varec = 0;
    }
    this.setState({ ec: varec });
  /*  Firebase.database().ref(`user/jose/${this.state.vtype}/${response.key}`).update({
      ...response.obj
    });*/
    this.setState({ loader: <Loader /> });
    timeoutLength = 5000;
    this.randomVal();


  }

  retrieveElement(coll, number) {
    let limit = this.state.configuration.elimit;
    Object.keys(coll).map((key, index) => {
      if (index === number - 1) {
        if (coll[key].ok >= limit)
          number++;
        else {
          if (this.state.tEnglish)
            this.setState({ vtext: coll[key].english });
          else
            this.setState({ vtext: coll[key].spanish });
        }
      }
    });
  }

  updateState(coll, type, type2) {
    let number = 0;
    Object.keys(coll).map((key, index) => {
      if (coll[key].ok >= this.state.configuration.elimit) { number++; }
    });
    let state = Math.round(number / this.state.configuration.limit) > 0 ? Math.round(number / this.state.configuration.limit) + 1 : 1;
    this.state.configuration[`${type2}`] = number;
    this.state.configuration[`${type}`] = state;
   /* Firebase.database().ref(`user/jose/configuration`).update({
      ...this.state.configuration
    });*/
  }


  validateResponse() {
    let consulta = this.state.expressiones;
    if (this.state.vtype === 'word') {
      consulta = this.state.words;
    }
    else if (this.state.vtype === 'rule') {
      consulta = this.state.rules;
    }
    let response = '';
    Object.keys(consulta).map((key, index) => {
      if (consulta[key].english.trim() === this.state.vtext.toUpperCase().trim()) {
        response = { key, obj: consulta[key] };
      }
      else if (consulta[key].spanish.trim() === this.state.vtext.toUpperCase().trim()) {
        response = { key, obj: consulta[key] };
      }
    });
    return response;
  }

  validateInsert() {
    let consulta = this.state.expressiones;
    if (this.state.wtype === 'word')
      consulta = this.state.words;
    else if (this.state.wtype === 'rule')
      consulta = this.state.rules;
    let response = false;
    Object.keys(consulta).map((key, index) => {
      if (consulta[key].english === this.state.wenglish.toUpperCase()) {
        response = true;
        this.setState({ response: consulta[key].spanish });
      }
    });
    return response;
  }

  submitAdd = e => {
    e.preventDefault();
    let objectIn = { 'spanish': this.state.wspanish.toUpperCase().trim(), 'english': this.state.wenglish.toUpperCase().trim(), 'example': this.state.wexample.toUpperCase() };
   // let key = Firebase.database().ref().child(`user/jose/${this.state.wtype}`).push().key;
    this.setState({ message: "This elment exist in DB" });

    if (!this.validateInsert()) {
    /*  Firebase.database().ref(`user/jose/${this.state.wtype}/${key}`).set({
        ...objectIn
      }).then(
        () => {
          console.log('added: ' + key);
        }).catch(err => {
          console.log('error: ' + err.error);
        });
*/
      this.updateData();
      this.setState({ message: "It's OK" });
      this.setState({ wenglish: '' });
      this.setState({ wspanish: '' });
      this.setState({ wexample: '' });
    }
  }

  switchForm = e => {
    if (this.state.tipo) {
      this.setState({ tipo: false })
    } else {
      this.setState({ tipo: true })
    }
  }

  changeColor() {
    if (this.state.current > 0 && this.state.current <= this.state.configuration.climit / 4)
      this.setState({ color: 'red' });
    else if (this.state.current > 0 && this.state.current <= this.state.configuration.climit / 2)
      this.setState({ color: 'orange' });
    else if (this.state.current > 0 && this.state.current <= (3 * this.state.configuration.climit) / 4)
      this.setState({ color: 'yellow' });
    else if (this.state.current > 0 && this.state.current <= this.state.configuration.climit)
      this.setState({ color: 'green' });
  }

  render() {

    let wfront = null;
    if ((this.state.vtext.includes(' ') && this.state.vtext.length > 18) || (!this.state.vtext.includes(' ') && this.state.vtext.length > 6))
      wfront = <h3>{this.state.tipo ? 'Add' : this.state.vtext}</h3>
    else
      wfront = <h2>{this.state.tipo ? 'Add' : this.state.vtext}</h2>

    let efront = null;
    if ((this.state.verror.includes(' ') && this.state.verror.length > 18) || (!this.state.verror.includes(' ') && this.state.verror.length > 6))
      efront = <h3 style={{ color: this.state.verror.includes("It's good") ? 'green' : 'red' }}>{this.state.verror}</h3>
    else
      efront = <h2 style={{ color: this.state.verror.includes("It's good") ? 'green' : 'red' }}>{this.state.verror}</h2>


    if (this.state.configuration.limit === undefined && this.message != undefined)
    {
      return <Loader />
    
    }
    else{
      return (

        <div className='container'>
          <a href={this.message}>Authenticate with Asana</a>

          <div className='row rowStytle' >
            <div className='col-sm-6 brand'>
              <a href='#' className='logo'>English <span>.</span></a>
              <div className='row'>
                <a href='#' className='logo2'> words: {this.state.nw} <span>.</span></a>
              </div>
              <div className='row'>
                <a href='#' className='logo2'> espressions: {this.state.ne} <span>.</span></a>
              </div>
              <div className='row'>
                <a href='#' className='logo2'> rules: {this.state.nr} <span>.</span></a>
              </div>
              <div className="heading">
                {wfront}
                <p>{this.state.tipo ? 'Other element' : 'Your ' + this.state.vtype}</p>
                <h3 style={{ color: this.state.color }}>{this.state.tipo ? '' : this.state.current + '/' + this.state.configuration.climit}</h3>
              </div>
              <div className='progressE'>
                <a href='#' className='logo3'>Progress <span>.</span></a>
                <div className='row'>
                  <a href='#' className='logo4'> words: {this.state.configuration.cWord} <span>.</span></a>
                </div>
                <div className='row'>
                  <a href='#' className='logo4'> espressions: {this.state.configuration.cExpression} <span>.</span></a>
                </div>
                <div className='row'>
                  <a href='#' className='logo4'> rules: {this.state.configuration.cRule} <span>.</span></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 form">
              <div className={`login form-peice ${this.state.tipo ? 'switched' : ''}`}>

                <Form className="login-form" >
                  {this.state.loader}
                  {efront}
                  <br />
                  <Form.Group>
                    <Form.Label>what does this word mean?</Form.Label>
                    <Form.Control type="text" placeholder="Word mean" value={this.state.vword} onChange={(e) => { this.setState({ vword: e.target.value }); }} />
                  </Form.Group>
                  {/*
                <Form.Group>
                  <Form.Label>can you write a example...</Form.Label>
                  <Form.Control type="text" placeholder="Write example" value={this.state.vexample} onChange={(e) => { this.setState({ vexample: e.target.value }); }} />
                </Form.Group>
  */}
                  <div className="CTA">
                    <Button id="submit" variant="danger" onClick={this.validateIn}>Validate</Button>
                    <a href="#" className="switch" style={{ 'padding-left': '20px' }} onClick={this.switchForm}>Add element</a>
                  </div>
                </Form>
              </div>
              <div className={`signup form-peice ${this.state.tipo ? '' : 'switched'}`}>
                <Form className="signup-form" action="#" method="post">

                  <Form.Group>
                    <Form.Label>What does this word in English?</Form.Label>
                    <Form.Control type="text" placeholder="Word english" value={this.state.wenglish} onChange={(e) => { this.setState({ wenglish: e.target.value }); }} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>What does this word in Spanish?</Form.Label>
                    <Form.Control type="text" placeholder="Word spanish" value={this.state.wspanish} onChange={(e) => { this.setState({ wspanish: e.target.value }); }} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>what does this word example</Form.Label>
                    <Form.Control type="text" placeholder="Example" value={this.state.wexample} onChange={(e) => { this.setState({ wexample: e.target.value }); }} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className='py-3 px-md-5'>What does this type?</Form.Label>
                    <Form.Select id="disabledSelect" className='py-3 px-md-5' value={this.state.wtype} onChange={(e) => { this.setState({ wtype: e.target.value }); }}>
                      <option>word</option>
                      <option>rule</option>
                      <option>expression</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="CTA">
                    <Button id="submit" variant="danger" onClick={this.submitAdd}> Add</Button>

                    <a href="#" className="switch" style={{ 'padding-left': '20px' }} onClick={this.switchForm}>Let's go practice</a>
                  </div>
                  <footer style={{ paddingTop: '3em' }}>
                    <p>
                      Version : {packageJson.version}
                    </p>
                  </footer>
                </Form>
              </div>
            </div>
          </div>
          <footer>
            <p>
              Message : <a href="http://mohmdhasan.tk" target="_blank">{this.state.message}</a>
            </p>
          </footer>
        </div>
      );
    }
  }
}


export default connect()(Word);
