
import { getAllUsers } from '../services/user.service.js';
import { getAllAdmins , getAdminById , updateAdmin , deleteAdmin} from '../services/admin.service.js';

export const getAllUsersController = async (req, res) => {
  const result = await getAllUsers();
  result.success 
    ? res.status(200).json(result.data)
    : res.status(500).json({ error: result.error });
};

export const getAllAdminsController = async (req, res) => {
    const result = await getAllAdmins();
    result.success 
      ? res.status(200).json(result.data)
      : res.status(500).json({ error: result.error });
  };
  

export const getAdminByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getAdminById(id);
  result.success 
    ? res.status(200).json(result.data)
    : res.status(404).json({ error: result.error });
};

export const updateAdminController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await updateAdmin(id, data);
  result.success 
    ? res.status(200).json(result.data)
    : res.status(400).json({ error: result.error });
};

export const deleteAdminController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteAdmin(id);
  result.success 
    ? res.status(204).send()
    : res.status(500).json({ error: result.error });
};