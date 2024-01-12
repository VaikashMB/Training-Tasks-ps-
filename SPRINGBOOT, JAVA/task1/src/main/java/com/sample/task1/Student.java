package com.sample.task1;

public class Student {
    private Long Id;
    private String Name;
    private  String College;
    private String Dept;

    public  Student(Long Id,String Name,String College,String Dept){
        this.Id = Id;
        this.Name = Name;
        this.College = College;
        this.Dept = Dept;
    }


    public Long getId(){
        return Id;
    }
    public void setId(Long id){
        Id = id;
    }

    public String getName(){
        return Name;
    }
    public void setName(String name){
        Name = name;
    }

    public String getCollege(){
        return College;
    }
    public void setCollege(String college){
        College = college;
    }

    public String getDept(){
        return Dept;
    }
    public void setDept(String dept){
        Dept = dept;
    }
}
