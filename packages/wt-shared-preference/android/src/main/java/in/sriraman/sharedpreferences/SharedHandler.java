package in.sriraman.sharedpreferences;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.content.SharedPreferences.OnSharedPreferenceChangeListener;

import java.util.Map;
import android.util.Log;
// abstract void	apply()
// Commit your preferences changes back from this Editor to the SharedPreferences object it is editing.

// abstract SharedPreferences.Editor	clear()
// Mark in the editor to remove all values from the preferences.

// abstract boolean	commit()
// Commit your preferences changes back from this Editor to the SharedPreferences object it is editing.

// abstract SharedPreferences.Editor	putBoolean(String key, boolean value)
// Set a boolean value in the preferences editor, to be written back once commit() or apply() are called.

// abstract SharedPreferences.Editor	putFloat(String key, float value)
// Set a float value in the preferences editor, to be written back once commit() or apply() are called.

// abstract SharedPreferences.Editor	putInt(String key, int value)
// Set an int value in the preferences editor, to be written back once commit() or apply() are called.

// abstract SharedPreferences.Editor	putLong(String key, long value)
// Set a long value in the preferences editor, to be written back once commit() or apply() are called.

// abstract SharedPreferences.Editor	putString(String key, String value)
// Set a String value in the preferences editor, to be written back once commit() or apply() are called.

// abstract SharedPreferences.Editor	putStringSet(String key, Set<String> values)
// Set a set of String values in the preferences editor, to be written back once commit() or apply() is called.

// abstract SharedPreferences.Editor	remove(String key)
// Mark in the editor that a preference value should be removed, which will be done in the actual preferences once commit() is called.
public class SharedHandler implements
    OnSharedPreferenceChangeListener {

    private SharedPreferences mSharedPreferences;

    private static SharedHandler sSharedHandler;

    public SharedHandler(Context context) {
        Log.d("sharehandler", "SharedHandler: **");
        mSharedPreferences = context.getSharedPreferences(context.getPackageName() + "_preferences", Context.MODE_PRIVATE);
        mSharedPreferences.registerOnSharedPreferenceChangeListener(this);
    }

    public SharedHandler(Context context, String name) {
        Log.d("sharehandler", "SharedHandler: "+name);
        mSharedPreferences = context.getSharedPreferences(name, Context.MODE_PRIVATE);
        mSharedPreferences.registerOnSharedPreferenceChangeListener(this);
    }

    public static SharedHandler getInstance() {
        return sSharedHandler;
    }

    public static void init(Context context) {
        if (sSharedHandler == null) {
            Log.d("sharehandler", "init:** ");
            sSharedHandler = new SharedHandler(context);
        }
    }

    public static void init(Context context, String name) {
        if (sSharedHandler == null) {
        Log.d("sharehandler", "init: "+name);
            sSharedHandler = new SharedHandler(context, name);
        }
    }

    public void putExtra(String key, Object value) {
        Log.d("sharehandler", "putExtra: "+key+":"+value);
        SharedPreferences.Editor editor = mSharedPreferences.edit();
        if (value instanceof String) {
            editor.putString(key, (String) value).commit();
        } else if (value instanceof Boolean) {
            editor.putBoolean(key, (Boolean) value).commit();
        // } else if (value instanceof Integer) {
        //     editor.putInt(key, (Integer) value).commit();
        // } else if (value instanceof Long) {
        //     editor.putLong(key, (Long) value).commit();
        // } else if (value instanceof Float) {
        //     editor.putFloat(key, (Float) value).commit();
        } else if (value instanceof Long) {
            editor.putLong(key, (Long) value).commit();
        } 
    }

    public String getString(String key) {
        Log.d("sharehandler", "getString: "+key+":"+mSharedPreferences.getString(key, null));
        return mSharedPreferences.getString(key, null);
    }

    public Float getFloat(String key) {
        return mSharedPreferences.getFloat(key, 0f);
    }

    public Long getLong(String key) {
        return mSharedPreferences.getLong(key, 0);
    }

    public Boolean getBoolean(String key) {
        Log.d("sharehandler", "getBoolean: "+key+":"+mSharedPreferences.getBoolean(key, false));
        return mSharedPreferences.getBoolean(key, false);
    }

    public Integer getInt(String key) {
        return mSharedPreferences.getInt(key, 0);
    }

    public void clear() {
        mSharedPreferences.edit().clear().commit();
    }

    public Map<String, ?> getAllSharedData(){
        return mSharedPreferences.getAll();
    }

    public void deleteKey(String key) {
        SharedPreferences.Editor editor = mSharedPreferences.edit();
        editor.remove(key);
        editor.commit();
    }

    public void onSharedPreferenceChanged (SharedPreferences sharedPreferences, String key) {
        Log.d("sharehandler", "onSharedPreferenceChanged: "+key+":");
    }

}
