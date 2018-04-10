import React, { Component } from 'react';

class App extends Component {
constructor(props){

	super(props);
	this.state ={
		due:'',
		received:'',

		twenties:0,
		tens:0,
		fives:0,
		ones:0,
		quarters:0,
		dimes:0,
		nickels:0,
		pennies:0,

	}

this.handleDue = this.handleDue.bind(this);
this.handleReceived = this.handleReceived.bind(this);
this.handleClick= this.handleClick.bind(this);

}

handleDue(event){
	this.setState({due:event.target.value});
	console.log(this.state.due);

}

handleReceived(event){
	this.setState({received:event.target.value});
		console.log(this.state.received);

}


handleClick(event){

    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();


 let distribution = {	
		 twenty : 2000,
		 ten : 1000,
		 five : 500,
		 one : 100,
		 quarter : 25,
		 dime : 10,
		 nickel : 5,
		 penny : 1,

		}

		let difference = ((this.state.received) - (this.state.due))*100;

		 let twenties = parseInt(difference/distribution.twenty);
 		 difference = difference - (twenties * distribution.twenty);

		 let tens = parseInt(difference/distribution.ten);
 		 difference = difference - (tens * distribution.ten);

		 let fives = parseInt(difference/distribution.five);
 		 difference = difference - (fives * distribution.five);

		 let ones = parseInt(difference/distribution.one);
 		 difference = difference - (ones * distribution.one);

		let quarters = parseInt(difference/distribution.quarter);
 		 difference = difference - (quarters * distribution.quarter);

		 let dimes = parseInt(difference/distribution.dime);
 		 difference = difference - (dimes * distribution.dime);

		 let nickels = parseInt(difference/distribution.nickel);
 		 difference = difference - (nickels * distribution.nickel);

		 let pennies = parseInt(difference/distribution.penny);
 		 difference = difference - (pennies * distribution.penny);
 		 console.log(twenties);

 		 this.setState({
 		 	twenty:twenties,
 		 	ten:tens,
 		 	five:fives,
 		 	one:ones,
 		 	quarter:quarters,
 		 	dime:dimes,
 		 	nickel:nickels,
 		 	penny:pennies,
 		 })

}

  render() {
  	return (

<div className="row">
<header>
	 <h1>Change Calculator</h1>
	<hr></hr>
</header>



	<div className="col-lg-4 col-md-4 col-sm-12">
		<div className="bg">

			<h2>Enter Information</h2>
			
			<h3>How much is due ?</h3>
				<input id="due" type="number" name="amountDue" value={this.state.due} onChange={this.handleDue}/>
			<h3>How much is received ?</h3>
				<input id="received" type="number" name="amountReceived" value={this.state.received} onChange={this.handleReceived}/>

			<button className="btn" name="submit" onClick={this.handleClick}>Calculate</button>	
		</div>
	</div>


	<div className=" col-lg-8 col-md-8 col-sm-12">

		<div className="bg">

			<div className=" greenbox col-lg-12">
				<output> {this.state.difference}</output>
			</div>
			

			<div className='row p0'>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Twenties</h2>
						<h3 id="twenties">{this.state.twenty}</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Tens</h2>
						<h3 id="tens">{this.state.ten}</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Fives</h2>
						<h3 id="fives">{this.state.five}</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Ones</h2>
						<h3 id="ones">{this.state.one}</h3>
					</div>
				</div>



						<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Quarters</h2>
						<h3 id="quarters">{this.state.quarter}</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Dimes</h2>
						<h3 id="dimes">{this.state.dime}</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Nickels</h2>
						<h3 id="nickels">{this.state.nickel}</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="box">
						<h2>Pennies</h2>
						<h3 id="penny">{this.state.penny}</h3>
					</div>
				</div>

			</div>
		
		</div>		

	
	</div>

</div>





  		);
  }
}

export default App;
