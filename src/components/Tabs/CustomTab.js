import React, { useEffect, useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import NoteCard from "../Card/NoteCard";
import { theme } from "../Theme/Theme";

function CustomTab() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(data);
      });
  }, []);
  const getBooks = async () => {
    await fetch("http://localhost:8000/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(data);
      });
  };
  const deleteTask = async (id, status) => {
    console.log(id);
    let i = 0;
    while (i < status.length) {
      // eslint-disable-next-line eqeqeq
      if (status[i].id == id) {
        break;
      }
      i++;
    }
    status[i].check = !status[i].check;
    console.log(status[i].name);
    await fetch(`http://localhost:8000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(status[i]),
    });
    getBooks();
  };
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div data-testid="test" className="test">
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="inherit"
          style={{
            backgroundcolor: "transparent",
            color: "black",
            boxShadow: "0px 0px 0px 0px",
          }}
        >
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleTabs}
            aria-label="disabled tabs example"
            inkBarStyle={{ background: "#22c870" }}
          >
            <Tab label="Currently reading" />
            <Tab label="Finished" />
          </Tabs>
        </AppBar>

        {value === 0
          ? status && (
              <NoteCard status={search(status, false)} onDelete={deleteTask} />
            )
          : status && (
              <NoteCard status={search(status, true)} onDelete={deleteTask} />
            )}
      </ThemeProvider>
    </div>
  );
}
function search(rows, type) {
  console.log(type);
  return rows.filter((row) => row.check === type);
}

export default CustomTab;
