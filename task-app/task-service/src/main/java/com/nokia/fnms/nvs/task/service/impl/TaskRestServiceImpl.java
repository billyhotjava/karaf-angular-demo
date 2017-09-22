package com.nokia.fnms.nvs.task.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nokia.fnms.nvs.task.domain.Task;
import com.nokia.fnms.nvs.task.persistance.TaskJpaService;
import com.nokia.fnms.nvs.task.service.TaskRestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.util.List;


@Path("/")
public class TaskRestServiceImpl implements TaskRestService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TaskRestServiceImpl.class);

    public TaskJpaService getTaskJpaService() {
        return taskJpaService;
    }

    public void setTaskJpaService(TaskJpaService taskJpaService) {
        this.taskJpaService = taskJpaService;
    }

    private TaskJpaService taskJpaService;

    @GET
    @Path("/{id}/")
    @Produces({ "application/json" })
    public Response getTask(@PathParam("id") Integer id) {
        LOGGER.debug("GET:getTask");
        Task task = taskJpaService.getTask(id);
        LOGGER.debug("Task id is: " + task.getId());
        final OutputStream out = new ByteArrayOutputStream();
        final ObjectMapper mapper = new ObjectMapper();
        try {
            mapper.writeValue(out, task);
        }catch (Exception e){
            e.printStackTrace();
        }
        return Response.ok().entity(out.toString()).build();
    }


    @Path("/")
    @POST
    @Consumes({"application/json"})
    @Produces({"application/json"})
    public Response addTask(Task task) {
        LOGGER.debug("Added task is:" + task.toString());
        taskJpaService.addTask(task);
        //return Response.ok().entity(task).build();
        return Response.ok(task).build();
    }

    @Path("/")
    @GET
    @Produces({ "application/json" })
    public Response getTasks() {
        LOGGER.debug("Get:get all tasks");
        List tasks = taskJpaService.getTasks();
        LOGGER.debug("TaskList count is: " + tasks.size());

        return Response.ok(tasks).build();
    }

    @PUT
    @Path("/{id}/")
    @Produces({ "application/json" })
    public void updateTask(@PathParam("id") Integer id, Task task) {
        LOGGER.debug("PUT:update one task");
        task.setId(id);
        taskJpaService.updateTask(task);
    }

    @DELETE
    @Path("{id}/")
    @Produces({ "application/json" })
    public void deleteTask(@PathParam("id") Integer id) {
        LOGGER.debug("DELETE:delete one task: id" + id);
        taskJpaService.deleteTask(id);
    }

}
