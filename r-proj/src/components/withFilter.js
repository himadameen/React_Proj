import React from "react";

const withFilter  = (InputComponent, data) => {
    // console.log(data);
    class OutputComponent extends React.Component {
        constructor(props) {
            super();
            this.state = {
                tempinput: '',
                orglist: data,
                filterlist: data,
                // search : '' 
            }
        }

        // handleChange = (e) => {
        //     this.setState({
        //         orglist: e.target.value
        //     })
        // }
        // filteredCoins =this.state.orglist && this.state.orglist.filter(coin=>
        //     coin.toLowerCase().includes(this.state.search.toLowerCase())
        // )

        dd = (data) => {
            console.log("data from crypto" + data)
        }

        filterFunc = (event) => {
            console.log('inside filter fn...', event.target.value);


            let tempArr = this.state.orglist.map((item) => ( 
                item.name.filter((filt) => (
                    filt.toLowerCase().includes(event.target.value.toLowerCase())
                    ))
                    
                    ))

            // let tempArr = this.state.orglist && this.state.orglist.filter((item) => (
            //     item.toString().toLowerCase().includes(item.name.toLowerCase())
            // ));

            
            this.setState({
                filterlist: tempArr,
                tempinput: event.target.value,
                orglist: this.state.orglist
            })
        }

        render() {
            return(
                <>
                <br></br>
                <input type="text" onChange={(e) => this.filterFunc(e)}/>
                <InputComponent list={this.state.filterlist} pullData = {this.dd}/>
                </>
            )
            
        }
    }
    return OutputComponent;
}

export default withFilter;

// import React from 'react'

// const withFilter = (InputComponent, original) => {
//     class OutputComponent extends React.Component {
//         constructor(props) {
//             super()
//             this.state = {
//                 tempList: '',
//                 originalData: original,
//                 filterList: original
//             }
//         }
        
//         handleChange = (e) => {
//             let temp = this.state.originalData.filter((item) => {
//                 // return item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
//                 return item.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())
               
//             })
//             this.setState({
//                 filterList: temp,
//                 tempList: e.target.value,
//                 originalData: this.state.originalData
//             })
//             console.log(original + " gsdhjhks");
//         }
        
//         render() {
//             return (
//                 <>
//                     <input type="text" id="input-field" placeholder='Provide the Name' onChange={(e) => this.handleChange(e)} />
//                     <InputComponent list={this.state.filterList} />
//                 </>
//             )
//         }
//     }
//     return OutputComponent;
// }

// export default withFilter;