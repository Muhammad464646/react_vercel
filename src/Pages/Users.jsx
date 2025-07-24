import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from 'antd';
import axios from 'axios';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Drawer, Modal } from 'antd';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Users = () => {
  const api = 'https://68500a03e7c42cfd17971736.mockapi.io/data/data';
  const [open1, setOpen1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [OpenDrawer, setOpenDrawer] = useState(null);
  const [formData, setFormData] = useState({ Name: '', AGE: '', img: '' });
  const [addData, setAddData] = useState({ Name: '', AGE: '', img: '' });
  const [editID, setEditID] = useState(null);
  

  useEffect(() => {
    async function GetData() {
      try {
        const res = await axios.get(api);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    GetData();
  }, []);



  const deleteData = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const editData = async (id, obj) => {
    try {
      await axios.put(`${api}/${id}`, obj);
      setEditID(null);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const addNewData = async (obj) => {
    try {
      await axios.post(api, obj);
      setAddData({ Name: '', AGE: '', img: '' });
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      render: (_, record) => (
        editID == record.id ? (
          <TextField
            label="Name"
            type="text"
            value={formData.Name}
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
            className="w-full"
          />
        ) : record.Name
      )
    },
    {
      title: 'AGE',
      dataIndex: 'AGE',
      render: (_, record) => (
        editID == record.id ? (
          <TextField
            label="Age"
            type="text"
            value={formData.AGE}
            onChange={(e) => setFormData({ ...formData, AGE: e.target.value })}
            className="w-full"
          />
        ) : record.AGE
      )
    },
    {
      title: 'img',
      dataIndex: 'img',
      render: (img, record) => (
        editID == record.id ? (
          <div className="flex flex-col gap-2">
            <TextField
              label="Image URL"
              type="text"
              value={formData.img}
              onChange={(e) => setFormData({ ...formData, img: e.target.value })}
              className="w-full"
            />
            <button
              onClick={() => { editData(editID, formData); setEditID(null); }}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded hover:opacity-90 transition"
            >
              Done
            </button>
          </div>
        ) : <img src={record.img} alt="" className="w-24 rounded shadow" />
      )
    },
    {
      title: "status",
      render: (_, record) => (
        <span className="text-sm font-medium text-gray-700">
          {record.status ? 'Active' : 'Inactive'}
        </span>
      )
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <div className="flex flex-col gap-2">
          <Button type="primary" size="middle" icon={<AntDesignOutlined />} onClick={() => deleteData(record.id)}>
            Удалить
          </Button>
          <button
            onClick={() => { setFormData({ Name: record.Name, AGE: record.AGE, img: record.img }); setEditID(record.id); }}
            className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
          >
            Редактировать
          </button>
          <Button type="primary" onClick={() => { setOpenDrawer(record); setOpen1(true); }}>
            Info
          </Button>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={record.status}
              onChange={() => {
                editData(record.id, { Name: record.Name, AGE: record.AGE, img: record.img, status: !record.status });
              }}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-sm">{record.status ? 'Active' : 'Inactive'}</span>
          </label>
        </div>
      )
    }
  ];
  return (
    <div>
      {/* {data.map((e) => (
        <Link to={`/user/${e.id}`} key={e.id}>
          <h1>{e.Name}</h1>
        </Link>
      ))} */}
    <div className="p-6 bg-gray-100 min-h-screen">
      <Drawer title="Basic Drawer" onClose={() => setOpen1(false)} open={open1}>
        {OpenDrawer && (
          <div className="space-y-2">
            <p className="font-semibold">{OpenDrawer.Name}</p>
            <p>{OpenDrawer.AGE}</p>
            <img src={OpenDrawer.img} alt="" className="w-32 rounded" />
          </div>
        )}
      </Drawer>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Добавить пользователя"
        open={isModalOpen}
        onOk={() => { addNewData(addData); setIsModalOpen(false); }}
        onCancel={() => setIsModalOpen(false)}
        >
        <Box component="form" className="flex flex-col gap-4">
          <TextField
            label='Name'
            variant='outlined'
            value={addData.Name}
            onChange={(e) => setAddData({ ...addData, Name: e.target.value })}
            />
          <TextField
            label='Age'
            variant='outlined'
            value={addData.AGE}
            onChange={(e) => setAddData({ ...addData, AGE: e.target.value })}
            />
          <TextField
            label='Image URL'
            variant='outlined'
            value={addData.img}
            onChange={(e) => setAddData({ ...addData, img: e.target.value })}
            />
        </Box>
      </Modal>
      <div className="mt-6">
        <Table
          columns={columns}
          rowKey="id"
          dataSource={data}
          pagination={{ pageSize: 10 }}
          className="shadow-lg rounded-lg overflow-hidden"
          />
      </div>
    </div>
    </div>
  )
};
export default Users;