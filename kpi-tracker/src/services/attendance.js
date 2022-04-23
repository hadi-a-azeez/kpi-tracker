import supabase from "src/supabase";

export const markAttendance = async (payload) => {
  let result = {
    success: false,
  };
  try {
    const { data = {}, error = {} } = await supabase
      .from("ab_attendance")
      .insert([payload]);
    if (data) result.success = true;
  } catch {
    result.success = false;
  } finally {
    return result;
  }
};

export const updateAttendane = async (payload) => {
  let result = {
    status: false,
  };
  try {
    const { data = {}, error = {} } = await supabase
      .from("ab_attendance")
      .update([payload])
      .eq("user_id", payload?.user_id)
      .eq("date", payload?.date);
    if (data) result.status = true;
  } catch {
    result.success = false;
  } finally {
    return result;
  }
};

export const getTodayAttendance = async (payload) => {
  let result = {
    success: false,
    data: {},
  };
  try {
    const { data = {}, error = {} } = await supabase
      .from("ab_attendance")
      .select()
      .eq("user_id", payload?.user_id)
      .eq("date", payload?.date);
    result.success = true;
    if (data) result.data = data;
  } catch {
    result.success = false;
  } finally {
    return result;
  }
};

export const getAllAttendance = async (payload) => {
  let result = {
    status: false,
    data: {},
  };
  try {
    const query = supabase
      .from("ab_attendance")
      .select()
      .eq("user_id", payload?.user_id);
    if (payload?.date) query = query.eq("date", payload?.date);
    const { data = {}, error = {} } = await query;
    result.status = true;
    if (data) result.data = data;
  } catch {
    result.success = false;
  } finally {
    return result;
  }
};
