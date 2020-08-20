package com.delta.studentProject.services;

import com.delta.studentProject.models.Student;
import com.delta.studentProject.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void addStudent(Student student) throws Exception {
        try {
            studentRepository.save(student);
        } catch (Exception e) {
            throw new Exception("Error saving student with name " + student.getName());
        }
    }

    public List<Student> getAll() throws Exception {
        try {
            return (List<Student>) studentRepository.findAll();
        } catch (Exception e) {
            throw new Exception("Error getting all students");
        }
    }

    public void removeById(Long id) throws Exception {
        try {
            studentRepository.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Student with id " + id + " was not found");
        }
    }

    public Student getById(Long id) throws Exception {
        try {
            Optional<Student> student = studentRepository.findById(id);
            if(student.isPresent()) {
                return student.get();
            }
        } catch (Exception e) {
            throw new Exception("Student with id " + id + " was not found");
        }
        return null;
    }

    public void update(Student student) throws Exception {
        try {
            studentRepository.save(student);
        } catch (Exception e) {
            throw new Exception("Error updating student with id" + student.getId());
        }
    }
}
