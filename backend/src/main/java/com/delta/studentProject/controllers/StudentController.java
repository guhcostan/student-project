package com.delta.studentProject.controllers;

import com.delta.studentProject.models.Student;
import com.delta.studentProject.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("students")
    public List<Student> getStudents() throws Exception {
        return studentService.getAll();
    }

    @PostMapping("student")
    public void addStudent(@RequestBody Student student) throws Exception {
        studentService.addStudent(student);
    }

    @GetMapping("student")
    public Student getStudent(@RequestParam Long id) throws Exception {
        return studentService.getById(id);
    }

    @DeleteMapping("student")
    public void deleteStudent(@RequestBody Long id) throws Exception {
        studentService.removeById(id);
    }

    @PutMapping("student")
    public void updateStudent(@RequestBody Student student) throws Exception {
        studentService.update(student);
    }

    @PostMapping("uploadImage")
    public String uploadImage(@RequestParam MultipartFile photo) throws Exception {
           byte[] bytes = photo.getBytes();
           Path path = Paths.get("photos/" + photo.getOriginalFilename());
           Files.write(path, bytes);
           return path.toString();
    }

    @GetMapping("photo")
    public Object getPhoto(@RequestParam String path) throws Exception {
        Path filePath = Paths.get(path);
        Resource resource = new UrlResource(filePath.toUri());
        if(resource.exists()) {
            String contentType = null;

            // Fallback to the default content type if type could not be determined
            if(contentType == null) {
                contentType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } else {
            throw new Exception("File not found on " + path);
        }
    }
}
