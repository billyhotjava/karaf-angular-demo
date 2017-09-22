package com.nokia.fnms.nvs.task.service;

import com.nokia.fnms.nvs.task.domain.Task;

import javax.ws.rs.core.Response;

public interface TaskRestService {

   Response getTask(Integer id);
   Response addTask(Task task);
   Response getTasks();
   void updateTask(Integer id,Task task);
   void deleteTask(Integer id);
}
