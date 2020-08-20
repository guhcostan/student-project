package com.delta.studentProject.repositories;

import com.delta.studentProject.models.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Long> {

}
