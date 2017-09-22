package com.nokia.fnms.nvs.task.persistance;


import com.nokia.fnms.nvs.task.domain.Task;

import java.util.List;

public interface TaskJpaService {
    Task getTask(Integer taskId);

    List<Task> getTasks();

    void updateTask(Task task);

    void deleteTask(Integer taskId);

    void addTask(Task task);
}
