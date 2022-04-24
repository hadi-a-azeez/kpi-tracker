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
    count: 0,
  };
  try {
    console.log("payload", payload);
    let query = supabase
      .from("ab_attendance")
      .select("*", { count: "exact" })
      .eq("user_id", payload?.user_id);
    if (payload?.startDate && payload?.endDate)
      query = query
        .gte("date", payload?.startDate)
        .lte("date", payload?.endDate);
    const {
      data = {},
      error = {},
      count = 0,
    } = await query.range(payload?.length, payload?.length + payload?.offset);
    console.log("count", count);
    result.status = true;
    result.data = data;
    result.count = count;
  } catch (e) {
    console.log("e", e);
    result.success = false;
  } finally {
    return result;
  }
};
