

import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faDownload);

const DisplayDecks = () => {

    const [employees, setEmployees] = useState([])

    const [selectedTemplate, setSelectedTemplate] = useState(1);


    const templates = [
        // Template 1
        (employee) => (
            <div className='body' id={`captureContainer_${employee.emp_id}`}>
                <div className='row row0'>
                    <div className='col'>
                        <div className='heading'> </div>
                        <h3>{employee.name}</h3>
                        <h3>Employee Id:{employee.emp_id}</h3>
                    </div>

                </div>

                <div className='row row1'>
                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Hometown</h2>
                        <p>{employee.hometown}</p>
                    </div>

                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Qualification</h2>
                        <p>{employee.educationQualification}</p>
                    </div>

                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Experience</h2>
                        <p>{employee.experience}</p>
                    </div>
                </div>

                <div className='row row2'>
                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Core skills</h2>
                        <p>{employee.skills}</p>
                    </div>

                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>IBU</h2>
                        <p>{employee.assignedIBU}</p>
                    </div>

                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Manager</h2>
                        <p>{employee.assignedManager}</p>
                    </div>
                </div>

                <div className='row row3'>
                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>You can reach me @</h2>
                        <p>Email: {employee.email}</p>
                        <p>Phone number: {employee.contact}</p>

                    </div>

                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Quote that fuels me</h2>
                        <p>{employee.favouriteQuote}</p>
                    </div>

                    <div className='col'>
                        <div className='heading'> </div>
                        <h2>Hobbies</h2>
                        <p>{employee.hobbies}</p>
                    </div>
                </div>
            </div>
        ),
        // Template 2
        (employee) => (
            <div className='body1' id={`captureContainer_${employee.emp_id}`}>


                <div className='profile-section1'>
                    <h2>Personal Information</h2>
                    <div className='info-item1'>
                        <h3>Name : {employee.name}</h3>
                        <h3>Employee Id: {employee.emp_id}</h3>
                    </div>
                    <div className='info-item1'>
                        <h3>Hometown</h3>
                        <p>{employee.hometown}</p>
                    </div>
                    <div className='info-item1'>
                        <h3>Qualification</h3>
                        <p>{employee.educationQualification}</p>
                    </div>
                    <div className='info-item1'>
                        <h3>Experience</h3>
                        <p>{employee.experience}</p>
                    </div>
                </div>

                <div className='profile-section1'>
                    <h2>Professional Details</h2>
                    <div className='info-item1'>
                        <h3>Core Skills</h3>
                        <p>{employee.skills}</p>
                    </div>
                    <div className='info-item1'>
                        <h3>IBU</h3>
                        <p>{employee.assignedIBU}</p>
                    </div>
                    <div className='info-item1'>
                        <h3>Manager</h3>
                        <p>{employee.assignedManager}</p>
                    </div>
                </div>

                <div className='profile-section1'>
                    <h2>Contact Information</h2>
                    <div className='info-item1'>
                        <h3>Email</h3>
                        <p>{employee.email}</p>
                    </div>
                    <div className='info-item1'>
                        <h3>Phone Number</h3>
                        <p>{employee.contact}</p>
                    </div>
                </div>

                <div className='profile-section1'>
                    <h2>Personal Preferences</h2>
                    <div className='info-item1'>
                        <h3>Favourite Quote</h3>
                        <p>{employee.favouriteQuote}</p>
                    </div>
                    <div className='info-item1'>
                        <h3>Hobbies</h3>
                        <p>{employee.hobbies}</p>
                    </div>
                </div>
            </div>

        ),

    ];






    useEffect(() => {
        fetch("http://localhost:8080/employee/get")
            .then(res => res.json())
            .then((result) => {
                setEmployees(result);
            }
            )
    }, [])



    const downloadWelcomeDeck = async (employee) => {

        const captureContainerId = `captureContainer_${employee.emp_id}`;
        const captureContainer = document.getElementById(captureContainerId);

        try {
            const canvas = await html2canvas(captureContainer);

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `WelcomeDeck_${employee.emp_id}.png`;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        } catch (error) {
            console.error('Error capturing content:', error);
        }
    };



    const changeTemplate = () => {
        setSelectedTemplate((prevTemplate) => (prevTemplate % templates.length) + 1);
    };






    return (
        <div>
            <div className='test'>
                <h1>NEW JOINEES WELCOME DECK</h1>
                <button className='changeTemplate' onClick={changeTemplate}>Change Template</button>
            </div>
            {employees.map((employee) => (
                <div>
                    <div className='test'>
                        <h3>{employee.name}'s Welcome Deck</h3>
                        <div>
                            <FontAwesomeIcon
                                icon="download"
                                className="download-icon"
                                onClick={() => downloadWelcomeDeck(employee)}
                            />
                        </div>
                    </div>
                    <div id={`captureContainer_${employee.emp_id}`}>
                        {templates[selectedTemplate - 1](employee)}

                    </div>

                </div>
            ))}
        </div>
    );
};

export default DisplayDecks;
