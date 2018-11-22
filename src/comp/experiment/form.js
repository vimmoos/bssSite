import React from 'react'
import { Form, FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap'
export default class FormComponent extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div>
                <Form inline>
                    <FormGroup controlId='formInLineAge'>
                        <ControlLabel>Age</ControlLabel>{'  '}
                        <FormControl onChange={this.props.handleAge} type='number' placeholder='23'/>
                    </FormGroup>{'  '}
                    <FormGroup controlId='formInLineGender'>
                        <ControlLabel>Gender</ControlLabel>{'   '}
                        <FormControl componentClass='select' onChange={this.props.handleGender} placeholder={this.props.gender} >
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </FormControl>
                    </FormGroup>
                </Form>
                <form>
                    <FormGroup controlId='formOther'>
                        <ControlLabel> Example for other stuff</ControlLabel>
                        <FormControl 
                                type='text'
                                onChange={this.props.handleOther}
                        />
                    </FormGroup>
                </form>
                <Button onClick={this.props.handleClick} bsStyle='primary' bsSize='large'> Submit </Button>
            </div>
        )
    }
    
}
