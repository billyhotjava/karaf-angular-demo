package com.nokia.fnms.nvs.task.persistance;

import com.nokia.fnms.nvs.task.domain.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public class TaskJpaServiceImpl implements TaskJpaService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TaskJpaServiceImpl.class);

    @PersistenceContext(unitName = "tasks")
    private EntityManager entityManager;

    public EntityManager getEntityManager() {
        return entityManager;
    }

    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional(Transactional.TxType.SUPPORTS)
    public Task getTask(Integer id) {
        LOGGER.debug("TASKDAO COME");
        LOGGER.debug("Method:getTask,entityManager is:" + entityManager.toString());
        return entityManager.find(Task.class, id);
    }

    public void addTask(Task task) {
        Task newTask = new Task();
        newTask.setStatus(task.getStatus());
        newTask.setName(task.getName());
        LOGGER.debug("Method:addTask,newTask is:" + newTask.toString());
        entityManager.persist(newTask);
        entityManager.flush();
    }


    @Transactional(Transactional.TxType.SUPPORTS)
    public List<Task> getTasks() {
        LOGGER.debug("Method:getTasks,entityManager is:" + entityManager.toString());

        CriteriaQuery<Task> query = entityManager.getCriteriaBuilder().createQuery(Task.class);
        return entityManager.createQuery(query.select(query.from(Task.class))).getResultList();
    }

    public void updateTask(Task task) {
        LOGGER.debug("Method:updateTask,entityManager is:" + entityManager.toString());
        entityManager.merge(task);
    }

    public void deleteTask(Integer id) {
        LOGGER.debug("Method:deleteTask,entityManager is:" + entityManager.toString());
        entityManager.remove(getTask(id));
    }
}
