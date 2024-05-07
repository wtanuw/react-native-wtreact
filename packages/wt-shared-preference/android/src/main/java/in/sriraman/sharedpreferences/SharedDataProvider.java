package in.sriraman.sharedpreferences;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;

import java.util.Map.Entry;

public class SharedDataProvider {

    private static final String TAG = "SharedDataProvider";

     public static String[][] getMultiSharedValues(String[] keys) {
        SharedHandler sharedHandler = SharedHandler.getInstance();
        String[][] results = new String[keys.length][2];
        for (int i = 0; i < keys.length; i++) {
            results[i][0] = keys[i];
            results[i][1] = String.valueOf(sharedHandler.getString(keys[i]));
        }
        return results;
    }

		public static String[][] getAllSharedValues() {
        Map<String, ?> keyValues = SharedHandler.getInstance().getAllSharedData();
        List<String> keys = new ArrayList<>(keyValues.keySet());
        String[][] results = new String[keys.size()][2];
        for (int i = 0; i < keys.size(); i++) {
            results[i][0] = keys.get(i);
            results[i][1] = String.valueOf(keyValues.get(keys.get(i)));
        }
        return results;
    }
		
		/*public static String[] getMultiSharedValues(String[] keys) {
        SharedHandler sharedHandler = SharedHandler.getInstance();
        String[] results = new String[keys.length];
        for (int i = 0; i < keys.length; i++) {
            results[i] = sharedHandler.getString(keys[i]);
        }
        return results;
    }

    public static String[][] getMultiSharedValues(String[] keys) {
        SharedHandler sharedHandler = SharedHandler.getInstance();
        String[][] results = new String[keys.length][2];
        for (int i = 0; i < keys.length; i++) {
            results[i][0] = keys[i];
            results[i][1] = String.valueOf(sharedHandler.getString(keys[i]));
        }
        return results;
    }
    */

    public static String[] getAllKeys() {
        Map<String, ?> keyValues = SharedHandler.getInstance().getAllSharedData();
        List<String> keys = new ArrayList<>(keyValues.keySet());
        String[] results = new String[keys.size()];
        for (int i = 0; i < keys.size(); i++) {
            results[i] = keys.get(i);
        }
        return results;
    }

    public static Map<String, Object> getAllMapSharedValues() {
        Map<String, ?> keyValues = SharedHandler.getInstance().getAllSharedData();
        List<String> keys = new ArrayList<>(keyValues.keySet());
   		final Map<String, Object> constants = new HashMap<>();
   		for (int i = 0; i < keyValues.size(); i++) {
            String k = keys.get(i);
            Object v = String.valueOf(keyValues.get(keys.get(i)));
            constants.put(k, v);
        }
        
        return constants;
    }

    public static Map<String, Object> getAllMap() {
        Map<String, ?> keyValues = SharedHandler.getInstance().getAllSharedData();
        List<String> keys = new ArrayList<>(keyValues.keySet());
   		final Map<String, Object> constants = new HashMap<>();
   		for (int i = 0; i < keyValues.size(); i++) {
            String k = keys.get(i);
            Object v = keyValues.get(keys.get(i));
            constants.put(k, v);
        }
        
        return constants;
    }

    public static Object getSharedValue(String key) {
        Map<String, ?> keyloop = SharedHandler.getInstance().getAllSharedData();
        Boolean have = keyloop.containsKey(key);
        Object result = keyloop.get(key);
        if (have && result instanceof Boolean) {
                //handle boolean
            return SharedHandler.getInstance().getBoolean(key);
        } else if (have && result instanceof String) {
                //handle String
            return SharedHandler.getInstance().getString(key);
        } else {

        }
        return SharedHandler.getInstance().getString(key);
    }

    public static void putSharedValue(String key, Object value) {
        SharedHandler.getInstance().putExtra(key, value);
    }

    public static void clear() {
        SharedHandler.getInstance().clear();
    }

    public static void deleteSharedValue(String key) {
        SharedHandler.getInstance().deleteKey(key);
    }

}
