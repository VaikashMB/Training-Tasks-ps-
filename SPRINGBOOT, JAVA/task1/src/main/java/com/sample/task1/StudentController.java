package com.sample.task1;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    private Student student;


    @PostMapping("/set")
    public String setStudent(@RequestBody Student newStudent){
        this.student = newStudent;
        return ("Student details set successfully");
    }

    @GetMapping("/get")
    public Student getStudent(){ return this.student;}

}
