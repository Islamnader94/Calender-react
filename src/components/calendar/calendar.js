import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './calendar.scss';

 
const scheduler = window.scheduler;
 
export default class Calendar extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);
    }
 
    render() {
        return (
            <div className="calendar">
                <div className="calendar-menu">
                    <div className="title">Calendar</div>
                    <div className="row">
                        <div className="col-2">
                            <div className="dropdown">
                                <button type="button" class="btn btn-secondary dropdown-toggle left-icon-holder right-icon-hoder" data-toggle="dropdown">
                                <i class="fa fa-calendar"></i> 13 - 19 April
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">13 - 19 April</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="dropdown">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                    All Appointments
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">All Appointments</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                        </div>
                        <div className="col-2"></div>
                        <div className="col-2">
                            <div className="color-picker">
                                <span class="dot red"></span>
                                <span class="dot green"></span>
                                <span class="dot blue"></span>
                                <span class="dot orange"></span>
                                <span class="dot purpule"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scheduler-container'>
                    <div
                        ref={ (input) => { this.schedulerContainer = input } }
                        style={ { width: '100%', height: '100%' } }
                    ></div>
                </div>
            </div>
       );
    }
}