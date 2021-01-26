export const addRoleService = async (role: any) => {
    return await role.save();
};

export const showRolesService = async (role: any) => {
    return await role.find();
};
