import React, { Component } from 'react';
import IdCard from '../components/IdCard'

export default class IdCardPage extends Component {
    render() {
        return (
            <div>
                <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" 
                                          lastName='Doe'
                                          firstName='John'
                                          gender='male'
                                          height="178"
                                          birth="1992-07-14"
                                  />

                <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg"
                                      lastName='Delores '
                                      firstName='Obrien'
                                      gender='female'
                                      height={172}
                                      birth="1988-05-11"
                                      /> 
            </div>
        )
    }
}
