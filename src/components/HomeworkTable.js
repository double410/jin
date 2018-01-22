import 'react-dates/initialize';
import React, { Component } from 'react';
import { Form, Button, Card, Header, Grid, List } from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import homework from "../data/sample.json";
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class HomeworkTable extends Component {
    constructor(props) {
        super(props);
        // const now = Date.now();
        displayFormat: () => moment.localeData().longDateFormat('L'),
        this.state = {
            date: props.initialDate,
        };
    }
    // moment.locale('cn');

    render() {
        const items = homework.classes.map((item, index) => {
            let contents = item.content.split('\n');
            if (Array.isArray(contents)) {
                contents = contents.map((content, index) => {
                    return (
                        <List.Item key={index}>
                            {content}
                        </List.Item>
                    );
                });
            }

            return (
                <Card.Content key={index}>
                    <Card.Header>{item.subject}</Card.Header>
                    <Card.Description>
                        {contents}
                    </Card.Description>
                </Card.Content>
            );
        });
        // https://github.com/airbnb/react-dates
        console.log(this.state.date);

        return (
            <Grid column={1}>
                <Grid.Column width={10}>
                    <Form>
                        {/* <Form.Input label='请选择日期：' placeholder='dd/mm/yyyy' /> */}
                        <SingleDatePicker
                            date={this.state.date} // momentPropTypes.momentObj or null
                            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                            // displayFormat={displayFormat}
                        />
                        <Button color='teal' type='submit'>查询</Button>
                    </Form>
                    <Header color='teal'>{homework.title}</Header>
                    <Card fluid color='teal'>
                        {items}
                    </Card>
                </Grid.Column>
            </Grid>
        );
    }
}

export default HomeworkTable;