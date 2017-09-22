package com.nokia.fnms.nvs.task.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;


@Entity
@Table
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private boolean status;


    public Task() {
        super();
    }


    public Task(Integer id, String name, boolean status) {
        super();
        this.id = id;
        this.name= name;
        this.status = status;
    }

    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = new Integer(id);
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name= name;
    }

    @JsonProperty("status")
    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status= status;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Task {\n");

        sb.append("    id: ").append(toIndentedString(id)).append("\n");
        sb.append("    title: ").append(toIndentedString(name)).append("\n");
        sb.append("    status: ").append(toIndentedString(status)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
